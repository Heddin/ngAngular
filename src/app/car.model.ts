export class Car{
  public name:string;
  public date: string;
  public model: string;
  public isSold : boolean;
  public id?: number;

  constructor(name,date,model,isSold,id = null){
    this.name = name;
    this.date = date;
    this.model = model;
    this.isSold = isSold;
    this.id = id;
  }
}

export interface Cars{
  cars: Car[];
}
