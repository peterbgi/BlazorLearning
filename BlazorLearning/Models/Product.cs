namespace BlazorLearning.Models
{
    public class Product
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int Price { get; set; }

        public bool IsActive { get; set; }
        
        public IEnumerable<Product_Prop> Productproperties{ get; set;}
    }
}
