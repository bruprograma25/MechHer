export const base44 = {
  auth: {
    me: async () => ({ full_name: "Usuária MechHer", email: "usuario@mechher.com" }),
    logout: () => console.log("Logout efetuado"),
  },
  entities: {
    Vehicle: {
      list: async () => [],
      create: async (data) => data,
      update: async (id, data) => ({ id, ...data }),
      delete: async (id) => id,
    },
    Maintenance: { list: async () => [] },
    MaintenanceAlert: { filter: async () => [] },
  },
};
