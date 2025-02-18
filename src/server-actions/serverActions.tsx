'use server'

import sql from 'better-sqlite3'
import {revalidatePath} from "next/cache";

const db = sql('meals.db')

export const saveMeal = async (formData: FormData) => {
    /*console.log(formData);
    console.log('saveAction');*/

    const titleValue = formData.get('title')
    db.prepare(`INSERT INTO meals (title) VALUES (?)`)
        .run(titleValue)

    revalidatePath('/')

    // redirect('/success')
}

type Meal = {id: number, title: string};
export const getMeals = async ():Promise<Meal[]> => {
    return db.prepare<Meal[]>(`SELECT * FROM meals`).all() as Meal[]
}