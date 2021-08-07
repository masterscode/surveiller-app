import  axios  from 'axios';
import { ActuatorLink, ActuatorLinks } from '../@types/types';
import {config} from '../core/config';



  const fetchBaseActuatorLinks = async ():Promise<ActuatorLink[]> => {
    let result: ActuatorLink[] = [];
    try {
      const response = await axios.get(config.baseUrl);
      const responseData = (await Object.entries(
        response.data._links
      )) as unknown as ActuatorLinks[];

      for (let link of responseData) {
        const [title, { href, templated }] = link;
        result.push({ title, href, templated });
      }

    } catch (exception) {
      console.log(exception);
    }

    return  result;

  };

  export {fetchBaseActuatorLinks}