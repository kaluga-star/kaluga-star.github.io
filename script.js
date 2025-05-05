document.getElementById("loadMore").addEventListener("click", function() {
    const newRoutes = [
        "Маршрут 4: Улица Кирова - Площадь Куйбышева",
        "Маршрут 5: Улица Гагарина - Музей изобразительных искусств",
        "Маршрут 6: Площадь Победы - Краеведческий музей"
    ];
    
    const routeList = document.getElementById("routeList");
    
    newRoutes.forEach(route => {
        const li = document.createElement("li");
        li.textContent = route;
        routeList.appendChild(li);
    });
});
