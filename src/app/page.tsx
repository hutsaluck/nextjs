import Form from "next/form";
import {getMeals, saveMeal} from "@/server-actions/serverActions";

export default async function Home() {
    const meals = await getMeals();

    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            {/*<form action="/submit">
        <input type="text" name={'name'}/>
        <button>Submit</button>
      </form>*/}
            {/*<Form action="/submit">
            <input type="text" name={'name'}/>
            <button>Submit</button>
        </Form>*/}
            <Form action={saveMeal}>
                <input type="text" name={'title'}/>
                <button>Submit</button>
            </Form>
            <div>
                {meals.map(meal => (<div key={meal.id}>{meal.title}</div>))}
            </div>
        </div>
    );
}
