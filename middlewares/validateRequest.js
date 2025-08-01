export const validateRequest = (schema) => (req, res, next) => {
  try {
    console.log('Données reçues :', req.body);
    schema.parse({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    next();
  } catch (error) {
    console.error('Erreur de validation Zod :', error);
    console.error('Détails de l\'erreur :', error.errors);
    res.status(400).send(error.errors);
  }
};