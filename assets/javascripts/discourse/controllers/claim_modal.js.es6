import ModalFunctionality from 'discourse/mixins/modal-functionality';
import DiscourseController from 'discourse/controllers/controller';

export default DiscourseController.extend(ModalFunctionality, {

  // needs: ['mapsSelected'],
  // happeningDetails: {},
  // actions: {
  //   addHappening: function(){
  //     var happeningDetails = this.get('happeningDetails');
  //     var place = this.get('content.location');
  //     place.happenings = place.happenings || [];
  //     // debugger;
  //     place.happenings.pushObject(happeningDetails);
  //     var targetController = this.get('controllers.mapsSelected');
  //     targetController.send('savePlaceEdit', place);
  //     this.send('closeModal');
  //   },
  // },
  onShow: function(){
    debugger;
  }
});


