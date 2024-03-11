const FormIndex = () => {
    return (
        <form class="amount-tax-price" id="formIndex" required>
        <select id="productName" name="name" data-index="new" required></select>
        <input required placeholder="Amount" type="number" name="amount" id="amount" min="1" />
        <input disabled placeholder="Tax" type="number" name="tax" id="tax" />
        <input disabled placeholder="Price" type="number" name="price" id="price" />
        <input class="secundary-button" id="buttonCreateProduct" type="submit" value="Add Product">
        </input>
      </form>
    )
}

export default FormIndex;