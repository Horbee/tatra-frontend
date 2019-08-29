export abstract class Endpoints {
  public static APP_BASE_URL = "https://tatra-tura-2019.firebaseio.com/";
  //public static APP_BASE_URL = "https://tatra-tura-2019-dev.firebaseio.com/";
  public static AVAILABILITIES = `${Endpoints.APP_BASE_URL}availabilities.json`;
  public static AVAILABILITY = `${Endpoints.APP_BASE_URL}availabilities/`;
}
