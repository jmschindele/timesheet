
let i = 1;
let costCodeRow = (`

<div class='row'>
    <div class='col-3' id='test-handler' contenteditable='true'>
        412005
    </div>
    <div class='col-1'>
        <div class='row'>
            <div class='col-7 text-left'>
                ST
            </div>
            <div class='col-5 text-left'>
                1
            </div>
        </div>
        <div class='row'>
            <div class='col-7'>
                OT
            </div>
            <div class='col-5'>
                2
            </div>
        </div>
        <div class='row'>
            <div class='col-7'>
                DT
            </div>
            <div class='col-5'>
                3
            </div>
        </div>
    </div>

    <div class='col-4'>
        <div class="row">
            <div class="col-12 no-padding">
                <div class="flex-container">
                    <div class='hrs hour-container-1${i}' contenteditable='true'>&nbsp</div>
                    <div class='hrs hour-container-1${i}' contenteditable='true'>&nbsp</div>
                    <div class='hrs hour-container-1${i}' contenteditable='true'>&nbsp</div>  
                    <div class='hrs hour-container-1${i}' contenteditable='true'>&nbsp</div>
                    <div class='hrs hour-container-1${i}' contenteditable='true'>&nbsp</div>
                    <div class='hrs hour-container-1${i}' contenteditable='true'>&nbsp</div>  
                    <div class='hrs hour-container-1${i}' contenteditable='true'>&nbsp</div>     
                </div>
            </div>
        </div>

        <div class="row">
        <div class="col-12 no-padding">
            <div class="flex-container">
            <div class='hrs hour-container-2${i}' contenteditable='true'>&nbsp</div>
            <div class='hrs hour-container-2${i}' contenteditable='true'>&nbsp</div>
            <div class='hrs hour-container-2${i}' contenteditable='true'>&nbsp</div>  
            <div class='hrs hour-container-2${i}' contenteditable='true'>&nbsp</div>
            <div class='hrs hour-container-2${i}' contenteditable='true'>&nbsp</div>
            <div class='hrs hour-container-2${i}' contenteditable='true'>&nbsp</div>  
            <div class='hrs hour-container-2${i}' contenteditable='true'>&nbsp</div>       
            </div>
        </div>
    </div>

    <div class="row">
    <div class="col-12 no-padding">
        <div class="flex-container">
        <div class='hrs hour-container-3${i}' contenteditable='true'>&nbsp</div>
        <div class='hrs hour-container-3${i}' contenteditable='true'>&nbsp</div>
        <div class='hrs hour-container-3${i}' contenteditable='true'>&nbsp</div>  
        <div class='hrs hour-container-3${i}' contenteditable='true'>&nbsp</div>
        <div class='hrs hour-container-3${i}' contenteditable='true'>&nbsp</div>
        <div class='hrs hour-container-3${i}' contenteditable='true'>&nbsp</div>  
        <div class='hrs hour-container-3${i}' contenteditable='true'>&nbsp</div>        
        </div>
    </div>
</div>
    
</div>
    </div>


</div>

`)

var contenteditable = $('[contenteditable]')
    let text = contenteditable.textContent;
    console.log(text)

function loadCells() {
$('#pay-items').append(costCodeRow)
}

loadCells();


// $('#test-handler').click(divClicked)

// $(editableText).blur(function() {
//     var html = $this.val();
//     var viewableText = $("<div>")
//     viewableText.html(html)
//     $(this).replaceWith(viewableText)
// })


// function divClicked() {
//     var divHtml = $(this).text();
//     var editableText = $("<textarea />");
//     editableText.val(divHtml);
//     $(this).replaceWith(editableText);
//     editableText.focus();
//     // setup the blur event for this new textarea
//     editableText.blur(editableTextBlurred);
// }

// function editableTextBlurred() {
//     var html = $(this).val();
//     var viewableText = $("<div>");
//     viewableText.text(html);
//     $(this).replaceWith(viewableText);
//     // setup the click event for this new div
//     $(viewableText).click(divClicked);
// }

