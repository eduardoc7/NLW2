import { Request, Response } from 'express';

import convertHtoM from "../utils/convertHourToMinutes";
import db from "../database/connection";

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

export default class ClassesController {
  
  async index(request: Request, response: Response) {
    const filters = request.query;

    const subject = filters.subject as string;
    const week_day = filters.week_day as string;
    const time = filters.time as string;

    if(!filters.week_day || !filters.subject || !filters.time){
      return response.status(400).json({
        error: 'Missing filters to search classes'
      });
    }

    const timeInMinutes = convertHtoM(time);

    const classes = await db('classes')
      .whereExists(function() {
        this.select('class_schedule.*')
        .from('class_schedule')
        .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
        .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
        .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
        .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
      })
      .where('classes.subject', '=', subject)
      .join('users', 'classes.user_id', '=', 'users.id')
      .select(['classes.*', 'users.*']);

    return response.json(classes);
  }
  
  async create(request: Request, response: Response) {
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule,
    } = request.body;
  
    // método transaction para todos os campos serem enviados totalmente preenchidos ao mesmo tempo
    // caso 2 sejam enviados e no último de erro, ele irá desfazer os campos 1 e 2.
    const trx = await db.transaction();
  
    try {
      const insertedUsersIds = await trx('users').insert({
        name,
        avatar,
        whatsapp,
        bio,
      });
    
      const user_id = insertedUsersIds[0];
    
      const insertedClassesIds = await trx('classes').insert({
        subject,
        cost,
        user_id,
      });
    
      const class_id = insertedClassesIds[0];
    
      const classSchedule = schedule.map((item: ScheduleItem) => {
        return {
          week_day: item.week_day,
          from: convertHtoM(item.from),
          to: convertHtoM(item.to),
          class_id,
        };
      });
    
      await trx('class_schedule').insert(classSchedule);
    
      await trx.commit();
      return response.status(201).send();
  
    } catch(err) {
      await trx.rollback();
      
      return response.status(400).json({
        error: 'Unexpected error while creating new class.'
      })
    }
  }
}