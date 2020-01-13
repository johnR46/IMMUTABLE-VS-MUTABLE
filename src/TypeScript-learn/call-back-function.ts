{
  interface SquardConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
  }

  let x: SquardConfig = { color: '23', width: 2, ['sd']: 2 };

  console.log(x);



  
}
