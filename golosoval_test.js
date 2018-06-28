Feature("Ебал Голосовал")

Scenario("Голосуй", (Я) => {
    Я.на_странице("kulinar/photos/1357");
    Я.вижу("Конкурс: Умелый кулинар");
    Я.кликаю({ css: 'label[data-control=vote]' });
});