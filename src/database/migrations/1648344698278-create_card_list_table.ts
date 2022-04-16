import { MigrationInterface, QueryRunner } from 'typeorm';

export class createCardListTable1648344698278 implements MigrationInterface {
  name = 'createCardListTable1648344698278';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`card_list\` (\`id\` int NOT NULL AUTO_INCREMENT, \`type\` varchar(255) NOT NULL, \`last_digits\` char(4) NOT NULL, \`capacity\` decimal(15,2) NOT NULL, \`available\` decimal(15,2) NOT NULL, \`interestRate\` decimal(5,4) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`card_list\``);
  }
}
