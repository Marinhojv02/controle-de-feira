class Config{
    static postgresql:any = {
        POSTGRES_DB: process.env.POSTGRES_DB || "" as string ,
        POSTGRES_HOST: process.env.POSTGRES_HOST || "" as string,
        POSTGRES_PORT: process.env.POSTGRES_PORT || "" as unknown as number,
        POSTGRES_USER: process.env.POSTGRES_USER || "" as unknown as string,
        POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || "" as unknown as string,
    }
}
export default Config;