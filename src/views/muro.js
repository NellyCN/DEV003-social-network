export default () => {
    const viewWall = `
    <h2 class="text-center">postea</h2>
    <figure class="text-center">
        <img class="image" src="" alt="Travellx">
    </figure>`;

    const divElem = document.createElement('div');
    divElem.innerHTML = viewWall;

    return divElem;
};