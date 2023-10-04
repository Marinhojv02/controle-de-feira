class Config {
  static postgresql: any = {
    POSTGRES_DB: process.env.POSTGRES_DB || ("postgres_teste" as string),
    POSTGRES_HOST: process.env.POSTGRES_HOST || ("localhost" as string),
    POSTGRES_PORT: process.env.POSTGRES_PORT || ("5432" as unknown as number),
    POSTGRES_USER: process.env.POSTGRES_USER || ("postgres" as unknown as string),
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || ("root" as unknown as string),
  };

  static jwt_secret_key = "f64b02b91c7d42b0f84f0482000513a7756403d58ff7f2d26ed4737fda4c6197b8feabfb4467869702dcd65666d0d5dfee59c271a39e7bc0550ee39bbb64f4f0";
}
export default Config;
