import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'src/config';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        const { connection, name, user, password, host, port } =
          configService.database;
        return Object.assign({
          type: connection,
          host,
          port,
          username: user,
          password,
          database: name,
          synchronize: false,
          autoLoadEntities: true,
        });
      },
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
