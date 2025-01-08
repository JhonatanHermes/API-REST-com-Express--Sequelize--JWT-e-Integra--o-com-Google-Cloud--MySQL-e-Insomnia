import Aluno from '../model/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Jhonatan',
      sobrenome: 'Lucco',
      email: 'jhojo@gmail.com',
      idade: 21,
      peso: 73,
      altura: 1.77,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
