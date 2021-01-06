class ConfigureSpacesService {
  static async getConfig() {
    const response = await Promise.resolve({
      centres: [{
        "id": "5fdbb1f1a75a66356f7466c7",
        "name": "Centro3",
        "address": "Alvarado 220",
        "phone_number": "123412344",
        "services": [
          {
            "id": "5feb8590a4ddc6186c84a796",
            "is_enabled": true,
            "name": "Consultorio",
            "subservices": [
              {
                "id": "5feb2ec29960d92f8836b897",
                "is_high_demand": true,
                "name": "Vacuna Covid",
                "range_size": 30
              },
              {
                "id": "5feb308da512ca25a44cbeb0",
                "is_high_demand": true,
                "name": "Vacuna Gripe A",
                "range_size": 30
              }]
          },
          {
            "id": "5feb859aa4ddc6186c84a798",
            "is_enabled": true,
            "name": "Vacunacion",
            "subservices": [
              {
                "id": "5feb30c39b7d682fecef6115",
                "is_high_demand": true,
                "name": "Vacuna SIDA",
                "range_size": 30
              }
            ]
          }
        ],
        "status": true,
        "dateModification": "2021-01-05T19:24:05.420Z"
      }],
    });

    return response;
  }
}

export default ConfigureSpacesService