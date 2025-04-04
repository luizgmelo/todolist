const API_URL = "http://localhost:3000";

export const apiFetch = async (endpoint: string, options = {}) => {
	try {
		const response = await fetch(`${API_URL}/${endpoint}`, options);

		if (!response.ok) {
			throw new Error(`Erro HTTP ${response.status}`)
		}

		return response.json();
	} catch (error) {
		throw new Error(`Erro na requisição ${error}`);
	}
};
