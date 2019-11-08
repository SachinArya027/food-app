import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization:
			'Bearer r7yU0UOHLzkjiI_ts-mT7VOHr6xqqTed3iORFaC8IqCgc0bcLPAcAD4Nm6FfRmm23G6AwzozgZH-Ok4IbXCGV9C2u7S9ELWMImzFHEsFiZrkvWYNQ33yupf1W5TBXXYx'
	}
});
