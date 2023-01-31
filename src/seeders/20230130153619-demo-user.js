module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('clientes', [
			{
				nome: 'Ana Souza',
				email: 'ana@ana.com',
				endereço: 'encantado',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Marcos Cintra',
				email: 'marcos@marcos.com',
				endereço: 'encantado',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Felipe Cardoso',
				email: 'felipe@felipe.com',
				endereço: 'encantado',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Sandra Gomes',
				email: 'sandra@sandra.com',
				endereço: 'encantado',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Paula Morais',
				email: 'paula@paula.com',
				endereço: 'encantado',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Sergio Lopes',
				email: 'sergio@sergio.com',
				endereço: 'encantado',
				createdAt: new Date(),
				updatedAt: new Date()
			}
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('clientes', null, {})
  }
}
