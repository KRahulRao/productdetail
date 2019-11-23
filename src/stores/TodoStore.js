import { observable, action } from "mobx";
import datafetcher from '../Fetchers/DataFetcher'

class TodoStore {

    @action
    fetchProductDetails(id){
         return datafetcher.getProductDetails(id);
    }
    @action
    fetchProductImages(id){
         return datafetcher.getProductImage(id);
    }
    @action
    fetchAllImages(){
        return datafetcher.getAllImages();
    }

}

export default TodoStore;