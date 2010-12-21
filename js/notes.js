/**
 * notes.js
 *
 * Contains all the note functionality
 *
 * @author Marvin Labod, Dennis Schneider
 */

var notes = notes || {};

/**
 * Hide all the note elements
 *
 * @author Dennis Schneider
 */
notes.hideNoteElements = function()
{
	notes.listItems.toggle();
	notes.note.toggle();
	$('div#note input#cancel-note').hide();
	$('div#note input#save-note').hide();
}

/**
 * Show all the note elements
 *
 * @author Dennis Schneider
 */
notes.showNoteElements = function()
{
	notes.listItems.hide();
	notes.note.show();
	notes.noteIcons.removeClass("activenote");
	$('div#note input#cancel-note').show();
	$('div#note input#save-note').show();
}

// Loaded on start
$(function()
{
	notes.noteIcons = $('li.more span.note');
	notes.listItems = $('div#lists');
	notes.note      = $('#note textarea');

<<<<<<< HEAD
$(function() {
	
	var noteIcons = $(".note");
	var listItems = $("#lists");
	var note = $("#note textarea");
	
	var noteContent = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Duo dolores et ea rebum";
	
=======
>>>>>>> a4b0f5517eed0d3f991d8c61c5482626ce6f3640
	// Hide Note initially
	notes.note.hide();
			
	// Click on Note Icon
	$('li.more span.note').live('click', function()
	{
		notes.noteIcons = $('li.more span.note');
		notes.listItems = $('div#lists');
		notes.note      = $('#note textarea');

		var task_id = $(this).parent().attr('id');
		notes.note.attr('id', task_id);
		var noteContent = wunderlist.getNoteForTask(task_id);
		notes.note.val(noteContent);
		
		if($(this).hasClass("activenote"))
		{
			notes.hideNoteElements();
			$(this).toggleClass("activenote");
		} 
		else 
		{
			notes.showNoteElements();
			notes.noteIcons.removeClass("activenote");
			$(this).addClass("activenote");		
		}
	});

	// Save the note
	$('div#note input#save-note').live('click', function()
	{
		notes.noteIcons = $('li.more span.note');
		notes.listItems = $('div#lists');
		notes.note      = $('#note textarea');

		var note_text = notes.note.val();
		var task_id   = notes.note.attr('id');
		wunderlist.saveNoteForTask(note_text, task_id);

		notes.noteIcons.removeClass("activenote");
		notes.hideNoteElements();
	});

	// Save the note
	$('div#note input#cancel-note').live('click', function()
	{
		notes.noteIcons = $('li.more span.note');
		notes.listItems = $('div#lists');
		notes.note      = $('#note textarea');

		var task_id   = notes.note.attr('id');
		var noteContent = wunderlist.getNoteForTask(task_id);

		notes.noteIcons.removeClass("activenote");
		notes.note.val(noteContent);
		notes.hideNoteElements();
	});
});