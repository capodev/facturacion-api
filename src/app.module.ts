import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { join } from "path";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "mysql",
            host: "localhost",
            port: 3307,
            username: "ideasoft",
            password: "while(vida==false)",
            database: "ideasoft-facturacion",
            entities: [join(__dirname, "/**/*.entity{.ts,.js}")],
            synchronize: true,
        }),
        UserModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
