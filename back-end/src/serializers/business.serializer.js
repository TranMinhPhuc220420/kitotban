const businessSerializer = (object) => ({
  id: object.id,
  // name_space: object.name_space,
  name: object.name,
  cancel_date: object.cancel_date,
  createdAt: object.createdAt,
  updatedAt: object.updatedAt,
});

const businessCollectionSerializer = (objects) => objects.map((object) => businessSerializer(object));

module.exports = {
  businessSerializer,
  businessCollectionSerializer,
};
