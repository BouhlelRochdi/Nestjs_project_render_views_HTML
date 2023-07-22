import { Controller, Get, Render } from "@nestjs/common";

@Controller('test2')
export class TestFeatureController {
  @Get()
  @Render('index') // 'index' refers to the 'index.ejs' file in the 'views' folder
  getIndex() {
    // You can pass data to the view here if needed
    const newObj = [
      {
      title: 'Hello Dali!',
      name: 'dali',
      lastName: 'dali1',
      email: 'dali2',
      adress: 'dali3',
      age: 'dali4'
    },
    {
      title: 'Hello Rochdi!',
      name: 'Rochdi',
      lastName: 'Rochdi1',
      email: 'Rochdi2',
      adress: 'Rochdi3',
      age: 'Rochdi4'
    },
    {
      title: 'Hello Blabla!',
      name: 'Blabla',
      lastName: 'Blabla1',
      email: 'Blabla2',
      adress: 'Blabla3',
      age: 'Blabla4'
    },   
    ]
    return {data : newObj};
  }
}
