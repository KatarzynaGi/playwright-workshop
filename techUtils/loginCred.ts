import CONFIG from './.env';

const cloud = {
    instanceName: CONFIG.cloud.instanceName,
    url: `https://${CONFIG.cloud.instanceName}.atlassian.net`,
    get users() {
        const { admin } = CONFIG.cloud.users;
        return {
            admin: {
                name: admin.name,
                username: admin.username,
                password: admin.password,
            },
        };
    },
};

export default cloud;
