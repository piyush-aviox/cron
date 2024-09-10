export default async function handler(req, res) {
    console.log('Cron job executed after every 2 minutes');
    res.status(200).json({ message: 'Cron job executed' });
  }
  