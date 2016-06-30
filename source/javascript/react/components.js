var LeaderBoard = React.createClass({
  // Initial state of the component.
  // Empty array at first.
  getInitialState: function() {
    return {
      camperInfo: []
    }
  },

  // After initial render, get JSON data.
  componentDidMount: function() {

    // URL to the Top 100 Coders JSON.
    var urlTopCoders = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";

    // Get a reference to this component.
    // Need to access component inside the jquery
    // operator.
    var thisComponent = this;

    // Get camper data.
    $.getJSON(urlTopCoders, function(result) {

      // Store result in the component state.
      thisComponent.setState({
        camperInfo: result
      });
    }); // end json request.
  },


    sortHelper: function(by, order) {

        // Array of camper info.
        var camperInfoCopy = this.state.camperInfo;

        // Different sort order if ascending or descending.
        if (order === "ascending") {

          camperInfoCopy.sort(function(a,b) {
            if (by === "username") {
              return 1;
            } else {
              return b[by] - a[by];
            }
          });

        } else {

          camperInfoCopy.sort(function(a,b) {
            if (by === "username") {
              return -1;
            } else {
              return a[by] - b[by];
            }

          });

        } // end order.

        // Now that the copy of the camper info is sorted,
        // need to replace the original located in the state.
        this.setState({
          camperInfo: camperInfoCopy
        });

    },// end sortHelper

    sortCamperNameAscending: function() {
      this.sortHelper("username", "ascending");
    },
    sortCamperNameDescending: function() {
      this.sortHelper("username", "descending");
    },
    sortPointsLast30Ascending: function() {
      this.sortHelper("recent", "ascending");
    },
    sortPointsLast30Descending: function() {
      this.sortHelper("recent", "descending");
    },
    sortPointsAlltimeAscending: function() {
      this.sortHelper("alltime", "ascending");
    },
    sortPointsAlltimeDescending: function() {
      this.sortHelper("alltime", "descending");
    },

  render: function() {
    return (
      <table className="table table-responsive table-striped table-condensed table-hover" id="leaderboard">

        {/* Header row */}
        <thead>
          <tr>
            <th id="header-rank">#</th>
            <th id="header-avatar"></th>
            <th id="header-name">
              <div className="btn-sort btn-sort-ascending">&nbsp;</div>
              <div>Camper Name</div>
              <div className="btn-sort btn-sort-ascending">&nbsp;</div>
            </th>
            <th id="header-points-last30">
              <div onClick={this.sortPointsLast30Ascending} className="btn-sort btn-sort-ascending">&#9650;</div>
              <div>Points in Last 30 Days</div>
              <div onClick={this.sortPointsLast30Descending}  className="btn-sort btn-sort-descending">&#9660;</div>
            </th>
            <th id="header-points-alltime">
              <div onClick={this.sortPointsAlltimeAscending} className="btn-sort btn-sort-ascending">&#9650;</div>
              <div>All Time Points</div>
              <div onClick={this.sortPointsAlltimeDescending} className="btn-sort btn-sort-descending">&#9660;</div>
            </th>
          </tr>
        </thead>

        <LeaderBoardRows rowData={this.state.camperInfo} />

      </table>

    )
  }
});

var LeaderBoardRows = React.createClass({
  render: function() {

    // Get the camper information.
    //
    // This is stored in the rowData props.
    var camperInfo = this.props.rowData;

    // Build HTML structure.
    //
    // Each element in camperInfo will be a row.
    // Each row has 5 columns.
    var htmlStructure = camperInfo.map(function(item, index, array) {
      return (

        <tr key={item.username}>
          <td>{index + 1}</td>
          <td><img src={item.img} className="avatar" /></td>
          <td><a href={"https://www.freecodecamp.com/" + item.username} target="_blank">{item.username}</a></td>
          <td>{item.recent}</td>
          <td>{item.alltime}</td>
        </tr>

      )
    });

    return <tbody>{htmlStructure}</tbody>
  }
});

ReactDOM.render(<LeaderBoard />, document.getElementById("mount-point"));
