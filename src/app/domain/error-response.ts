import { HttpResponse } from '@angular/common/http';


/**
 * Class that defines the starndard structure of an Error Response
 */
export class ErrorResponse extends HttpResponse<any> {


  constructor(message: string, statusCode: number) {
    super({
      body: {
        message: message,
      },
      status: statusCode,
    });
  }

  public static getMessage(error: ErrorResponse): string {
    if (error) {
      try {
        // let responseBody: any = error.json();
        // TODO: Cambiar como obtenemos el mensaje
        const responseBody: any = 'error';
        return responseBody.message;
      } catch (e) {
        return 'Error';
      }
    } else {
      return 'error';
    }
  }

}
