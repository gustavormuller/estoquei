import { createConnection } from "typeorm/globals";

export const databaseProviders = [
    {
      provide: 'DbConnectionToken',
      useFactory: async () => await createConnection({
        type: 'postgres',
        host: process.env.DB_HOST??'localhost',
        port: parseInt(process.env.DB_PORT??'5432'),
        username: process.env.DB_USER??'',
        password: process.env.DB_PASSWORD??'',
        database: process.env.DB_NAME??'',
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
      }),
    },
  ];