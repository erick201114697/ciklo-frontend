
export interface GetUserReq {
  id: string;
}

export interface IUser {
  id: string;
  names: string;
  surnames: string;
  country: string;
  mail: string;
  status: string;
  level: string;
  avatar: string;
  scope: string[];
  token: string;
  sex: string;
  phone: string;
  birthdate: string;
}

export class UserRes {

  /**
   * Create an user
   * @param user Interface to create an user
   */
  public static create(user?: IUser) {
    return {
      id: user.id,
      names: user.names,
      surnames: user.surnames,
      country: user.country,
      mail: user.mail,
      status: user.status,
      level: user.level,
      avatar: user.avatar,
      scope: user.scope,
      token: user.token,
      sex: user.sex,
      phone: user.phone,
      birthdate: user.birthdate,
    };
  }

  /**
   * Generate age
   * @param birth format dd/mm/yyyy of birthdate
   */
  public static getAge(birth: string): number {
    if (birth === '' || birth == null) {
      return 0;
    }
    const today = new Date();
    const dateParts: string[] = birth.split('/');

    // month is 0-based, that's why we need dataParts[1] - 1
    const birthDate = new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]);
    let age: number = today.getFullYear() - birthDate.getFullYear();
    const m: number = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
}
