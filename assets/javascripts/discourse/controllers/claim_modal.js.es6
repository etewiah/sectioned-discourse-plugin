import ModalFunctionality from 'discourse/mixins/modal-functionality';
import DiscourseController from 'discourse/controllers/controller';

export default DiscourseController.extend(ModalFunctionality, {

  needs: ['claim'],
  roomDetails: {},
  actions: {
    startClaim: function(){
      var roomDetails = this.get('roomDetails');
      // var place = this.get('content.location');
      // place.happenings = place.happenings || [];
      debugger;
      // place.happenings.pushObject(roomDetails);
      var targetController = this.get('controllers.claim');
      targetController.send('claimRoom', roomDetails);
      this.send('closeModal');
    },
  },
  onShow: function(){
    // debugger;
  }
});


