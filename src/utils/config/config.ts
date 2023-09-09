class Config{
    static postgresql:any = {
        POSTGRES_DB: process.env.POSTGRES_DB || "postgres_teste" as string ,
        POSTGRES_HOST: process.env.POSTGRES_HOST || "localhost" as string,
        POSTGRES_PORT: process.env.POSTGRES_PORT || "5432" as unknown as number,
        POSTGRES_USER: process.env.POSTGRES_USER || "postgres" as unknown as string,
        POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || "root" as unknown as string,
    }
}
export default Config;