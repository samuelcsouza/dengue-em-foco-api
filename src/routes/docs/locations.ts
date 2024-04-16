class LocationsSwagger {
  private tag: string = "Locations";

  new = {
    schema: {
      description: "Add new location",
      tags: [this.tag],
      summary: "New location",
      // security: [{ apiKey: [] }],
      body: {
        type: "object",
        properties: {
          name: { type: "string" },
          description: { type: "string" },
          address: { type: "string" },
          phone: { type: "string" },
          postal_code: { type: "string" },
        },
      },
      response: {
        201: {
          description: "Created",
          type: "object",
          properties: {
            name: { type: "string" },
            description: { type: "string" },
            address: { type: "string" },
            phone: { type: "string" },
            postal_code: { type: "string" },
            visited: { type: "boolean" },
            visited_at: { type: "string", nullable: true },
            created_at: { type: "string" },
            latitude: { type: "number", nullable: true },
            longitude: { type: "number", nullable: true },
            bounding_box: {
              type: "array",
              nullable: true,
              items: {
                type: "string",
              },
            },
            match_address: { type: "string", nullable: true },
          },
        },
      },
    },
  };

  getById = {
    schema: {
      description: "Get location by ID",
      tags: [this.tag],
      summary: "More info about specific location",
      // security: [{ apiKey: [] }],
      params: {
        type: "object",
        properties: {
          id: {
            type: "string",
            description: "Location ID",
          },
        },
      },
      response: {
        200: {
          description: "Location",
          type: "object",
          properties: {
            _id: { type: "string" },
            name: { type: "string" },
            description: { type: "string" },
            address: { type: "string" },
            phone: { type: "string" },
            postal_code: { type: "string" },
            visited: { type: "boolean", nullable: true },
            visited_at: { type: "string", nullable: true },
            created_at: { type: "string" },
            latitude: { type: "number" },
            longitude: { type: "number" },
            bounding_box: {
              type: "array",
              items: {
                type: "string",
              },
            },
            match_address: { type: "string" },
          },
        },
      },
    },
  };

  markAsVisited = {
    schema: {
      description: "Set location with visited",
      tags: [this.tag],
      summary: "Mark as Visited",
      params: {
        type: "object",
        properties: {
          id: {
            type: "string",
            description: "Location ID",
          },
        },
      },
      response: {
        200: {
          description: "Location",
          type: "object",
          properties: {
            _id: { type: "string" },
            name: { type: "string" },
            description: { type: "string" },
            address: { type: "string" },
            phone: { type: "string" },
            postal_code: { type: "string" },
            visited: { type: "boolean", nullable: true },
            visited_at: { type: "string", nullable: true },
            created_at: { type: "string" },
            latitude: { type: "number" },
            longitude: { type: "number" },
            bounding_box: {
              type: "array",
              items: {
                type: "string",
              },
            },
            match_address: { type: "string" },
          },
        },
      },
    },
  };

  delete = {
    schema: {
      description: "Delete location by ID",
      tags: [this.tag],
      summary: "Remove location",
      params: {
        type: "object",
        properties: {
          id: {
            type: "string",
            description: "Location ID",
          },
        },
      },
      response: {
        200: {
          description: "Deleted",
          type: "object",
          properties: {
            deleted: { type: "boolean" },
          },
        },
      },
    },
  };

  getAll = {
    schema: {
      description: "List all locations",
      tags: [this.tag],
      summary: "List all",
      response: {
        200: {
          description: "List",
          type: "array",
          items: {
            type: "object",
            properties: {
              _id: { type: "string" },
              name: { type: "string" },
              description: { type: "string" },
              address: { type: "string" },
              phone: { type: "string" },
              postal_code: { type: "string" },
              visited: { type: "boolean", nullable: true },
              visited_at: { type: "string", nullable: true },
              created_at: { type: "string" },
              latitude: { type: "number" },
              longitude: { type: "number" },
              bounding_box: {
                type: "array",
                items: {
                  type: "string",
                },
              },
              match_address: { type: "string" },
            },
          },
        },
      },
    },
  };

  update = {
    schema: {
      description: "Update location",
      tags: [this.tag],
      summary: "Update location",
      // security: [{ apiKey: [] }],
      body: {
        type: "object",
        properties: {
          name: { type: "string" },
          description: { type: "string" },
          address: { type: "string" },
          phone: { type: "string" },
          postal_code: { type: "string" },
          visited: { type: "boolean", nullable: true },
          visited_at: { type: "string", nullable: true },
          created_at: { type: "string" },
          latitude: { type: "number" },
          longitude: { type: "number" },
          bounding_box: {
            type: "array",
            nullable: true,
            items: {
              type: "string",
            },
          },
          match_address: { type: "string", nullable: true },
        },
      },
      response: {
        200: {
          description: "Updated",
          type: "object",
          properties: {
            _id: { type: "string" },
            name: { type: "string" },
            description: { type: "string" },
            address: { type: "string" },
            phone: { type: "string" },
            postal_code: { type: "string" },
            visited: { type: "boolean", nullable: true },
            visited_at: { type: "string", nullable: true },
            created_at: { type: "string" },
            latitude: { type: "number", nullable: true },
            longitude: { type: "number", nullable: true },
            bounding_box: {
              type: "array",
              nullable: true,
              items: {
                type: "string",
              },
            },
            match_address: { type: "string", nullable: true },
          },
        },
      },
    },
  };
}

export const swagger = new LocationsSwagger();
