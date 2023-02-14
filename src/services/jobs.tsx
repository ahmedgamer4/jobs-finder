import axios from 'axios';

async function getJobs(limit = 200) {
  const res = await axios.get(`https://remotive.com/api/remote-jobs?limit=${limit}`);
  return res.data;
}

export default getJobs;
