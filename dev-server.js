const { exec } = require('child_process');

const dev = exec('npm run dev', { stdio: 'inherit' });

dev.stdout.on('data', (data) => {
    process.stdout.write(data);
});

dev.stderr.on('data', (data) => {
    process.stderr.write(data);
});
