import ModalFunctionality from 'discourse/mixins/modal-functionality';
import DiscourseController from 'discourse/controllers/controller';

export default DiscourseController.extend(ModalFunctionality, {

  needs: ['claim'],
  roomDetails: {},
  descriptionValidation: function() {
    if (!this.get('validate')) {
      return;
    };
    // if (this.get('serverError')) return Discourse.InputValidation.create({
    //   failed: true,
    //   reason: this.get('serverError')
    // });
    if (this.blank('roomDetails.description')) return Discourse.InputValidation.create({
      failed: true,
      reason: "Please provide a description."
    });
    // If too short
    if (this.get('roomDetails.description').length < 10) {
      return Discourse.InputValidation.create({
        failed: true,
        reason: "Description has to be at least 10 characters long."
      });
    }

    // Looks good!
    return Discourse.InputValidation.create({
      ok: true,
      reason: ""
    });
  }.property('validate', 'roomDetails.description', 'serverError'),
  actions: {
    startClaim: function() {
      var roomDetails = this.get('roomDetails');
debugger;
      if (!roomDetails.description || roomDetails.description.length < 10) {
        this.set('validate', true);
        return;
      }
      // var place = this.get('content.location');
      // place.happenings = place.happenings || [];
      // place.happenings.pushObject(roomDetails);
      var targetController = this.get('controllers.claim');
      targetController.send('claimRoom', roomDetails);
      this.send('closeModal');
    },
  },
  onShow: function() {
    // debugger;
  }
});
