import axios, {AxiosResponse} from "axios";
import { config } from "../core/config";
import { BeanResponse, Bean } from "../@types/types";

const beanResources = async (): Promise<Bean> => {
	let result: Bean[] = [];
	const url = config.baseUrl + "/beans";
	try {
		const response:AxiosResponse<any> = await axios.get(url);
		const responseData:BeanResponse[] = (await Object.entries(
			response.data.context.application.bean
		)) as unknown as BeanResponse[];

		for (let bean of responseData) {
			const [title, { aliases, scope, type, resource,dependencies }] = bean;

			result.push({ title, aliases, scope, type, resource, dependencies  });
		}
	} catch (exception) {
		console.log(exception);
	}

	return result;
};

export { beanResources };