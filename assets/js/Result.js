<!DOCTYPE HTML>
<html>
	<head>
        <meta charset="utf-8" />
		<title>BPJS</title>
		<style>
            label{
                width: 100px;
                float: left;
                padding-top: 20px;
            }
            .form-control{
                width: 12px 20px;
                margin: 8px 0;
                padding: 12px 20px;
                border: 1px solid #ccc;
                border-radius: 4px;
                box-sizing: border-box;
                display: inline-block;
            }
            output{
                height: 30px;
                display: block;
                padding-top: 20px;
            }
            .btn{
                width: 100%;
                background-color: blue;
                padding: 14px 20px;
                color: white;
                margin: 8px 0;
                border: none;
                border-radius: 4px;
                cursor: pointer;
            }
            .btn:hover{
                background-color: red;
            }
            fieldset{
                border-radius: 5px;
                background-color: yellow;
                padding: 20px;
                border: 1px solid lightgray;
                width: 450px;
                margin: auto;
            }
        </style>
        </head>
        <body>

            <form>
                <fieldset>
                    <legend>Scoring Cart</legend>
                    <div class="form-group">
                        <label>Round One</label>
                        <input type="number" class="form-control prc">
                        </div>
                        <div class="form-group">
                            <label>Round Two</label>
                            <input type="number" class="form-control prc">
                            </div>
                            <div class="form-group">
                                <label>Round Three</label>
                                <input type="number" class="form-control prc">
                                </div>
                                <div class="form-group">
                                    <label>Round Four</label>
                                    <input type="number" class="form-control prc">
                                    </div>
                                    <div class="form-group">
                                        <label>Total</label>
                                        <output id="result"></output>
                                        </div>
                                        </fieldset>
                                        </form>

                                        <script src="jquery.min.js"></script>
                                        <script>
                                            $('.form-group').on('input','.prc',function(){
                                                var totalSum = 0;
                                                $('.form-group .prc').each(function(){
                                                    var inputVal = $(this).val();
                                                    if($.isNumeric(inputVal)){
                                                        totalSum += parseFloat(inputVal);
                                                    }
                                                });
                                                $('#result').val(totalSum);
                                            });

                                        </script>
                                        </body>
                                        </html>
                    </div>
                </fieldset>
            </form>
