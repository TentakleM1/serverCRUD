import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1730468941678 implements MigrationInterface {
    name = 'Migration1730468941678'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "topic" ADD "table_name" character varying NOT NULL DEFAULT 'default name'`);
        await queryRunner.query(`ALTER TABLE "user" ADD "table_name" character varying NOT NULL DEFAULT 'default name'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "table_name"`);
        await queryRunner.query(`ALTER TABLE "topic" DROP COLUMN "table_name"`);
    }

}
