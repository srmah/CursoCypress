Feature: Demo de Cocumber DOs

    Esto es un demo de como utilizar cocumber

    # Scenario: Demo de Cocumber Dos
    #     Given Abrir el navegador principal
    #     When Cargando el nombre juan
    #     When Cargando el email juan@gmail.com
    #     And Cargando la Dirección dirección_uno
    #     And Cargando la Dirección dos dirección_dos
    #     And Click en Button
    #     Then Validar el nombre de la Página
  
    Scenario Outline: Scenario Outline name: Demo de Cocumber
        Given Abrir el navegador principal
        When Cargando el nombre <username>
        When Cargando el email <email>
        And Cargando la Dirección <dir1>
        And Cargando la Dirección dos <dir2>
        And Click en Button
        Then Validar el nombre de la Página

        Examples:
            | username | email             | dir1    | dir2    |
            | rodrigo  | rodrigo@gmail.com | dir_uno | dir_dos |
            | juan     | juan@gmail.com    | dir_uno | dir_dos |
            | pedro    | pedro@gmail.com   | dir_uno | dir_dos |
            | erika    | erika@gmail.com   | dir_uno | dir_dos |
            | jessica  | jessica@gmail.com | dir_uno | dir_dos |

   