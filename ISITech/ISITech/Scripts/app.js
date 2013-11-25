var app = angular.module("vote", []);
app.controller("VotingController", function ($scope) {
    $scope.Options = [
        { Name: 'AngularJS', Votes: 8, Presenter: 'Langdon Oliver' },
        { Name: 'WebAPI', Votes: 3, Presenter: 'Cameron Tabor' },
        { Name: 'Less', Votes: 2, Presenter: '' },
        { Name: 'TypeScript', Votes: 3, Presenter: '' }
    ];
    $scope.Downvote = function (option) {
        if (!option.Downvoted) {
            if (option.Upvoted)
                option.Votes--;
            option.Downvoted = true;
            option.Votes--;
            option.Upvoted = false;
        }
    };
    $scope.Upvote = function (option) {
        if (!option.Upvoted) {
            if (option.Downvoted)
                option.Votes++;
            option.Downvoted = false;
            option.Votes++;
            option.Upvoted = true;
        }
    };
});