
import data from "../data"
const HomeScreen = {
    render: () => {
        const { products} = data;
        return `
        <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
            <a href="/#/product/${product.id}">
                            <img src="${product.image_src}"/>
                            <div class="product-brand">
                                ${product.name}
                            </div>
                            <div class="product-price">
                                $59
                            </div>

                        </div>
            </li>
            `).join('\n')}
            `
        
    }
}
export default HomeScreen;