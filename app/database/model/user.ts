import { Model } from '@nozbe/watermelondb';
import { field, writer } from '@nozbe/watermelondb/decorators';

export default class User extends Model {
  static table = 'users';

  @field('name') name!: string;

  @writer async changeName(name: string) {
    await this.update(user => {
      user.name = name;
    });
  }
}
