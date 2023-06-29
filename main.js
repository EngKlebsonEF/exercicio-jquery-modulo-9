$(document).ready(function() {
    // O código dentro dessa função será executado quando o documento estiver pronto

    // Ao submeter o formulário 
    $('#task-form').submit(function(event) {
      event.preventDefault(); // Evita que o formulário seja enviado

    var taskName = $('#task-input').val(); // Obtém o nome da tarefa digitado
    var startTime = $('#start-time-input').val(); // Obtem o horário inicial da tarefa
    var endTime = $('#end-time-input').val(); // Obtem o horário final da tarefa

    
    if (taskName !== '') {
        // Adiciona a tarefa como um novo item da lista, o horário inicial e final
        var listItem = $('<li>' + taskName + ' - ' + startTime + ' to ' + endTime + '</li>');
        $('#task-list').append(listItem);

        // Limpa o campo de input
        $('#task-input').val('');
        $('#start-time-input').val('');
        $('#end-time-input').val('');
    }
    });

    // Ao clicar nos itens da lista
    $('#task-list').on('click', 'li', function() {
      $(this).toggleClass('completed'); // Aplica/remova a classe 'completed'
    });

    // Limpar a lista de tarefas ao concluir
    $('#clear-button').click(function() {
      $('#task-list').empty(); // Remove todos os itens da lista de tarefas conclidas
    });
});