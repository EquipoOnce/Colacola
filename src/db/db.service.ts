/* eslint-disable prettier/prettier */
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { createPool, Pool } from 'mysql2/promise';

@Injectable()
export class DbService implements OnModuleInit, OnModuleDestroy {
    private pool: Pool;

    onModuleInit(): void {
        this.pool = createPool({
            port: 3306,
            host: '127.0.0.1',
            user: 'root',
            password: 'A1n15a1p18a1u23l12a1',
            database: 'Frauds_x',
        });
    }
    
    onModuleDestroy() {
        void this.pool.end();
    }

    getPool(): Pool {
        return this.pool;
    }
}