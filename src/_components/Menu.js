import {
    LeftContainer,
    MenuContainer
} from "../styles/menu.style"
import { ImageContainer } from "../styles/about.style";

const Menu = () => {
    const menuList = [
        {
            name: 'Bread Basket',
            description: 'Assortment of fresh baked fruit breads and muffins 5.50'
        },
        {
            name: 'Honey Almond Granola with Fruits',
            description: 'Natural cereal of honey toasted oats, raisins, almonds and dates 7.00'
        },
        {
            name: 'Belgian Waffle',
            description: 'Vanilla flavored batter with malted flour 7.50'
        },
        {
            name: 'Scrambled eggs',
            description: 'Scrambled eggs, roasted red pepper and garlic, with green onions 7.50'
        },
        {
            name: 'Blueberry Pancakes',
            description: 'With syrup, butter and lots of berries 8.50'
        }
    ];

    const MenuContent = () => {
        return menuList.map(value => <>
            <h2>{value.name}</h2>
            <h4>{value.description}</h4>
        </>)
    }


    return <MenuContainer id="Menu">
        <LeftContainer>
            {MenuContent()}
        </LeftContainer>
        <ImageContainer position='right'>
            <img src="https://www.w3schools.com/w3images/tablesetting.jpg" alt="receipe" />
        </ImageContainer>
    </MenuContainer>
}

export default Menu;