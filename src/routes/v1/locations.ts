import {
  FastifyInstance,
  FastifyRequest,
  FastifyReply,
  FastifyPluginAsync,
} from "fastify";
import {
  LocationId,
  LocationPagination,
  NewLocation,
} from "../../schemas/location";
import { locationService } from "../../config/services";

import { swagger } from "../docs/locations";

class LocationsEndpoints {
  new = async (request: FastifyRequest, reply: FastifyReply) => {
    const newLocation: NewLocation = request.body as NewLocation;
    const location = await locationService.create(newLocation);

    reply.status(201).send(location);
  };

  getById = async (request: FastifyRequest, reply: FastifyReply) => {
    const { id } = request.params as LocationId;

    const location = await locationService.get(id);

    reply.status(200).send(location);
  };

  markAsVisited = async (request: FastifyRequest, reply: FastifyReply) => {
    const { id } = request.params as LocationId;

    const response = await locationService.markAsVisited(id);
    reply.status(200).send(response);
  };

  delete = async (request: FastifyRequest, reply: FastifyReply) => {
    const { id } = request.params as LocationId;

    const isRemoved = await locationService.delete(id);

    const response = {
      deleted: isRemoved,
    };

    reply.status(200).send(response);
  };

  getAll = async (request: FastifyRequest, reply: FastifyReply) => {
    const { skip, limit } = request.query as LocationPagination;

    const locations = await locationService.list(Number(skip), Number(limit));
    reply.status(200).send(locations);
  };
}

export const locationsRoute: FastifyPluginAsync = async (
  fastify: FastifyInstance
): Promise<void> => {
  const locationsEndpoints = new LocationsEndpoints();

  // new
  fastify.post("/", swagger.new, locationsEndpoints.new);

  // get by id
  fastify.get("/:id", swagger.getById, locationsEndpoints.getById);

  // mark as visited
  fastify.patch(
    "/:id",
    swagger.markAsVisited,
    locationsEndpoints.markAsVisited
  );

  // delete
  fastify.delete("/:id", swagger.delete, locationsEndpoints.delete);

  // list all
  fastify.get("/", swagger.getAll, locationsEndpoints.getAll);
};
